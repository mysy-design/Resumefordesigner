import { useState } from 'react';

const STORAGE_KEY = 'portfolio_access_granted';
const CORRECT_CODE = '2026';

export function useInvitationGate() {
  const [granted, setGranted] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  });

  const grant = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setGranted(true);
  };

  return { granted, grant };
}

export default function InvitationGate({ onGranted }: { onGranted: () => void }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() === CORRECT_CODE) {
      onGranted();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center px-6"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="w-full max-w-[400px]">
        {/* Logo */}
        <div className="mb-12 text-center">
          <span className="text-[18px] text-[#3700ff]" style={{ fontWeight: 500 }}>
            Yang Sun ☀️
          </span>
        </div>

        {/* Card */}
        <div className="bg-[#f5f5f5] rounded-xl p-8">
          <h1
            className="text-[20px] text-[#1a1a1a] mb-2"
            style={{ fontWeight: 600 }}
          >
            Please enter your invitation code
          </h1>
          <p className="text-[#999999] text-[13px] mb-6">
            This portfolio is invitation-only.
          </p>

          <form onSubmit={handleSubmit}>
            <style>{`
              @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20%       { transform: translateX(-6px); }
                40%       { transform: translateX(6px); }
                60%       { transform: translateX(-4px); }
                80%       { transform: translateX(4px); }
              }
              .shake { animation: shake 0.4s ease; }
            `}</style>

            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError(false);
              }}
              placeholder="Enter code"
              autoFocus
              className={`w-full px-4 py-3 bg-white border rounded-lg text-[14px] text-[#1a1a1a] outline-none transition-all mb-2 ${
                error
                  ? 'border-red-400 focus:border-red-400'
                  : 'border-[#d0d0d0] focus:border-[#3700ff]'
              } ${shake ? 'shake' : ''}`}
            />

            {error && (
              <p className="text-red-500 text-[12px] mb-4">
                Incorrect code. Please try again.
              </p>
            )}
            {!error && <div className="mb-4" />}

            <button
              type="submit"
              className="w-full py-3 bg-[#3700ff] text-white text-[14px] rounded-lg hover:bg-[#2d00cc] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
