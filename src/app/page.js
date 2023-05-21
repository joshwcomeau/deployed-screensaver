import React from 'react';
import Link from 'next/link';

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        <li>
          <Link href="/lavender">lavender</Link>
        </li>
        <li>
          <Link href="/peachpuff">peachpuff</Link>
        </li>
        <li>
          <Link href="/hotpink">hotpink</Link>
        </li>
        <li>
          <Link href="/white">white</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
