"use client";
import BuddleText from "@/components/atoms/BuddleText";
import React from "react";
import ReactTypingEffect from "react-typing-effect";
export interface ITypingEffectProps {
  role?: string[];
}

const TypingEffect: React.FC<ITypingEffectProps> = ({ role }) => {
  return (
    <div>
      <ReactTypingEffect
        text={role || []}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, idx) => {
          return <BuddleText key={idx} content={text} />;
        }}
      />
    </div>
  );
};

export default TypingEffect;
