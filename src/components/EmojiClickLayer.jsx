import { useState, useEffect } from 'react';

const EMOJIS = ['🔮', '✨', '🌙', '🧿', '🤍', '💫', '🌟'];

export default function EmojiClickLayer() {
  const [sprites, setSprites] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newSprite = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
      };
      
      setSprites(prev => [...prev, newSprite]);
      
      // Remove sprite after animation
      setTimeout(() => {
        setSprites(prev => prev.filter(s => s.id !== newSprite.id));
      }, 1200);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {sprites.map(sprite => (
        <div
          key={sprite.id}
          className="emoji-sprite"
          style={{
            left: sprite.x - 16,
            top: sprite.y - 16,
          }}
        >
          {sprite.emoji}
        </div>
      ))}
    </>
  );
}
