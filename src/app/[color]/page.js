import React from 'react';

import COLORS from '../../data';
import ScreenSaver from '../../components/ScreenSaver';

function ScreenSaverExercise({ params }) {
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
