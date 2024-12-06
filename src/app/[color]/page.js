import React from 'react';

import COLORS from '../../data';
import ScreenSaver from '../../components/ScreenSaver';

async function ScreenSaverExercise({ params }) {
  const { color } = await params;

  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={params.color} />
    </main>
  );
}

export function generateStaticParams() {
  return COLORS.map((color) => ({
    color,
  }));
}

export default ScreenSaverExercise;
