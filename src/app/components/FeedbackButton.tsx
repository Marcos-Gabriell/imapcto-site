'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, XCircle } from 'lucide-react';
import FeedbackModal from './FeedbackModal';
import ContatoModal from './ContatoModal';

export default function FeedbackButton() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isContatoOpen, setIsContatoOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showOnScroll, setShowOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowOnScroll(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || !showOnScroll) return null;

  return (
    <>
      <div className="hidden md:fixed md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:z-50 md:flex md:items-center">
        <div className="relative flex items-center">
          <button
            onClick={() => setIsFeedbackOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-l-3xl flex items-center gap-2 transform -rotate-90 origin-bottom-right shadow-xl"
          >
            <MessageCircle size={16} />
            <span className="text-sm font-medium">Feedback</span>
          </button>

          <button
            onClick={() => setVisible(false)}
            className="absolute right-[-5px] bg-black text-white rounded-full p-[6px] hover:bg-gray-700 transition"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <XCircle size={18} />
          </button>
        </div>
      </div>
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
        onRedirectContato={() => {
          setIsFeedbackOpen(false);
          setIsContatoOpen(true);
        }}
      />
      <ContatoModal
        isOpen={isContatoOpen}
        onClose={() => setIsContatoOpen(false)}
      />
    </>
  );
}
