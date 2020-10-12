import React, { useState } from 'react';

function ManualAsk() {
  const [manual, setManual] = useState();

  return (
    <div>
      <input type="text" placeholder="digite aqui" />
    </div>
  );
}

export default AudAsk;