import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

// Sacred Catholic Hymn Chords (Panis Angelicus / Ave Maria style progressions)
const HYMN_CHORDS = [
  { name: 'F Major (경배와 찬양)', freqs: [87.31, 130.81, 220.0, 261.63, 349.23, 523.25] },
  { name: 'C/E (은총의 성모)', freqs: [82.41, 164.81, 196.0, 261.63, 329.63, 392.0] },
  { name: 'D minor (순교자의 믿음)', freqs: [73.42, 146.83, 220.0, 293.66, 349.23, 440.0] },
  { name: 'A minor/C (주님의 침묵)', freqs: [65.41, 130.81, 220.0, 261.63, 329.63, 440.0] },
  { name: 'B♭ Major (부활의 영광)', freqs: [58.27, 116.54, 174.61, 233.08, 293.66, 349.23] },
  { name: 'F/A (성 김대건 안드레아)', freqs: [55.0, 110.0, 174.61, 220.0, 261.63, 349.23] },
  { name: 'G minor (하느님의 자비)', freqs: [49.0, 98.0, 146.83, 233.08, 293.66, 392.0] },
  { name: 'C7 (세상의 빛)', freqs: [65.41, 130.81, 196.0, 233.08, 329.63, 392.0] },
];

export default function SacredAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.22); // Gentle ambient volume
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentChordName, setCurrentChordName] = useState('F Major (평화의 기도)');

  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const activeOscsRef = useRef([]);
  const chordIntervalRef = useRef(null);
  const chordIndexRef = useRef(0);

  // Initialize Web Audio Engine
  const initAudioEngine = () => {
    if (audioCtxRef.current) return audioCtxRef.current;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;

    const ctx = new AudioContextClass();

    // Master Gain Node
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, ctx.currentTime);

    // Warm Sanctuary Filter (Simulates deep cathedral brick & wooden acoustics)
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.Q.setValueAtTime(0.7, ctx.currentTime);

    // Subtle Stereo Cathedral Reverb Delay Simulation
    const delay = ctx.createDelay();
    delay.delayTime.setValueAtTime(0.38, ctx.currentTime);

    const feedback = ctx.createGain();
    feedback.gain.setValueAtTime(0.35, ctx.currentTime);

    const delayFilter = ctx.createBiquadFilter();
    delayFilter.type = 'lowpass';
    delayFilter.frequency.setValueAtTime(900, ctx.currentTime);

    delay.connect(feedback);
    feedback.connect(delayFilter);
    delayFilter.connect(delay);
    delay.connect(masterGain);

    filter.connect(masterGain);
    filter.connect(delay);
    masterGain.connect(ctx.destination);

    audioCtxRef.current = ctx;
    masterGainRef.current = masterGain;

    return ctx;
  };

  // Play a smooth liturgical church organ chord
  const playChord = (chord, ctx) => {
    if (!ctx || ctx.state !== 'running') return;

    // Smoothly fade out previous oscillators
    const now = ctx.currentTime;
    activeOscsRef.current.forEach(({ osc, gainNode }) => {
      try {
        gainNode.gain.cancelScheduledValues(now);
        gainNode.gain.setValueAtTime(gainNode.gain.value, now);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);
        setTimeout(() => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // Oscillator already stopped
          }
        }, 2500);
      } catch {
        // Gain ramp already completed
      }
    });
    activeOscsRef.current = [];

    // Create new chord layer with pipe organ timbre
    const newOscs = [];
    const chordGain = ctx.createGain();
    chordGain.gain.setValueAtTime(0.0001, now);
    chordGain.gain.exponentialRampToValueAtTime(0.18, now + 1.8);
    chordGain.connect(ctx.destination);

    chord.freqs.forEach((freq, idx) => {
      // 1. Primary Flute/Principal Pipe (Sine)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);

      // Subtle warm detune for pipe organ natural chorus effect
      const detuneCents = (Math.random() - 0.5) * 4;
      osc1.detune.setValueAtTime(detuneCents, now);

      const noteGain = ctx.createGain();
      // Lower notes have slightly more foundation, high notes sweeter
      const weight = idx === 0 ? 0.35 : idx <= 2 ? 0.22 : 0.15;
      noteGain.gain.setValueAtTime(weight, now);

      osc1.connect(noteGain);
      noteGain.connect(chordGain);
      osc1.start(now);

      // 2. Harmonic Celeste Pipe (Soft Triangle wave for octave resonance)
      if (idx >= 2 && idx <= 4) {
        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(freq * 0.5, now);
        const harmGain = ctx.createGain();
        harmGain.gain.setValueAtTime(0.06, now);
        osc2.connect(harmGain);
        harmGain.connect(chordGain);
        osc2.start(now);
        newOscs.push({ osc: osc2, gainNode: harmGain });
      }

      newOscs.push({ osc: osc1, gainNode: noteGain });
    });

    activeOscsRef.current = newOscs;
  };

  const volumeRef = useRef(volume);
  const isMutedRef = useRef(isMuted);

  useEffect(() => {
    volumeRef.current = volume;
    isMutedRef.current = isMuted;
  }, [volume, isMuted]);

  // Start continuous hymn playback loop
  const startHymnLoop = useCallback(() => {
    const ctx = initAudioEngine();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    // Set master volume
    const currentVol = isMutedRef.current ? 0 : volumeRef.current;
    masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
    masterGainRef.current.gain.setValueAtTime(0.001, ctx.currentTime);
    masterGainRef.current.gain.exponentialRampToValueAtTime(currentVol, ctx.currentTime + 2.5);

    setIsPlaying(true);

    // Play first chord
    playChord(HYMN_CHORDS[chordIndexRef.current], ctx);
    setCurrentChordName(HYMN_CHORDS[chordIndexRef.current].name);

    if (chordIntervalRef.current) clearInterval(chordIntervalRef.current);

    // Rotate hymn chords every 5.8 seconds
    chordIntervalRef.current = setInterval(() => {
      chordIndexRef.current = (chordIndexRef.current + 1) % HYMN_CHORDS.length;
      const nextChord = HYMN_CHORDS[chordIndexRef.current];
      setCurrentChordName(nextChord.name);
      playChord(nextChord, audioCtxRef.current);
    }, 5800);
  }, []);

  // Pause playback
  const stopHymnLoop = () => {
    setIsPlaying(false);
    if (chordIntervalRef.current) clearInterval(chordIntervalRef.current);

    if (audioCtxRef.current && masterGainRef.current) {
      const now = audioCtxRef.current.currentTime;
      masterGainRef.current.gain.cancelScheduledValues(now);
      masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, now);
      masterGainRef.current.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
    }
  };

  // Toggle Play / Pause
  const togglePlay = () => {
    if (isPlaying) {
      stopHymnLoop();
    } else {
      startHymnLoop();
    }
  };

  // Volume Change
  const handleVolumeChange = (newVol) => {
    setVolume(newVol);
    if (isMuted) setIsMuted(false);
    if (masterGainRef.current && audioCtxRef.current) {
      const now = audioCtxRef.current.currentTime;
      masterGainRef.current.gain.cancelScheduledValues(now);
      masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, now);
      masterGainRef.current.gain.linearRampToValueAtTime(newVol, now + 0.1);
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (masterGainRef.current && audioCtxRef.current) {
      const now = audioCtxRef.current.currentTime;
      const target = nextMute ? 0.0001 : volume;
      masterGainRef.current.gain.cancelScheduledValues(now);
      masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, now);
      masterGainRef.current.gain.linearRampToValueAtTime(target, now + 0.2);
    }
  };

  // Automatic gentle entrance playback (handles browser interaction policy gracefully)
  useEffect(() => {
    const handleFirstUserInteraction = () => {
      startHymnLoop();
      window.removeEventListener('pointerdown', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      window.removeEventListener('scroll', handleFirstUserInteraction);
    };

    // Defer initial playback attempt to avoid synchronous setState inside effect
    const timer = setTimeout(() => {
      try {
        startHymnLoop();
      } catch {
        // Autoplay pending user interaction
      }
    }, 150);

    window.addEventListener('pointerdown', handleFirstUserInteraction, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstUserInteraction, { once: true, passive: true });
    window.addEventListener('scroll', handleFirstUserInteraction, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointerdown', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      window.removeEventListener('scroll', handleFirstUserInteraction);
      if (chordIntervalRef.current) clearInterval(chordIntervalRef.current);
    };
  }, [startHymnLoop]);

  return (
    <div className="fixed bottom-5 left-5 z-40 transition-all duration-300">
      {isMinimized ? (
        /* Minimized Floating Sacred Sound Capsule */
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1A1412]/90 hover:bg-[#1A1412] text-white border border-[#B69A63]/60 shadow-xl backdrop-blur-md transition-all group"
          title="대성전 찬송가 오디오 플레이어 펼치기"
        >
          <Music className={`w-3.5 h-3.5 text-[#E6C687] ${isPlaying ? 'animate-bounce' : ''}`} />
          <span className="font-serif-kr text-[11px] font-bold text-[#FDFBF7]">
            {isPlaying ? '성음악 찬송가' : '찬송가 일시정지'}
          </span>
          <ChevronUp className="w-3.5 h-3.5 text-[#B69A63] opacity-70 group-hover:opacity-100" />
        </button>
      ) : (
        /* Full Dignified Audio Player Card */
        <div className="bg-[#181312]/92 border border-[#B69A63]/50 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl text-white max-w-[270px] sm:max-w-[290px] animate-fadeIn transition-all">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E6C687]" />
              <span className="text-[11px] font-serif-kr font-bold tracking-tight text-[#FDFBF7]">
                대성전 파이프오르간 찬송가
              </span>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1 text-[#AAA59B] hover:text-white rounded-md transition-colors"
              title="플레이어 접기"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Current Chord / Hymn Status */}
          <div className="mb-3 px-2 py-1.5 rounded-lg bg-white/[0.06] border border-white/5 flex items-center justify-between">
            <span className="text-[10px] text-[#DDD7CC] font-mono truncate max-w-[190px]">
              {isPlaying ? currentChordName : '찬송가 준비 (재생 버튼 클릭)'}
            </span>
            {isPlaying && (
              <span className="flex items-center gap-0.5">
                <span className="w-1 h-2.5 bg-[#E6C687] rounded-full animate-pulse" />
                <span className="w-1 h-3.5 bg-[#E6C687] rounded-full animate-pulse delay-75" />
                <span className="w-1 h-2 bg-[#E6C687] rounded-full animate-pulse delay-150" />
              </span>
            )}
          </div>

          {/* Controls: Play/Pause, Mute, Volume Slider */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={togglePlay}
              className={`p-2 rounded-full font-bold transition-all flex items-center justify-center shadow-md ${
                isPlaying
                  ? 'bg-[#B69A63] text-[#1A1412] hover:bg-[#D4AF37]'
                  : 'bg-[#5A2428] text-white hover:bg-[#722E33]'
              }`}
              title={isPlaying ? '찬송가 일시정지' : '찬송가 재생'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            {/* Volume slider & mute */}
            <div className="flex items-center gap-1.5 flex-1">
              <button
                onClick={toggleMute}
                className="p-1 text-[#DDD7CC] hover:text-[#E6C687] transition-colors"
                title={isMuted ? '음소거 해제' : '음소거'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-3.5 h-3.5 text-red-400" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="0.6"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#B69A63]"
                title="음량 조절"
              />
            </div>
          </div>

          {/* Subtext */}
          <p className="text-[9px] text-[#A69F94] font-serif-kr text-center mt-2 pt-1 border-t border-white/5">
            천주교 한강성당 평화의 성전 음악
          </p>
        </div>
      )}
    </div>
  );
}
