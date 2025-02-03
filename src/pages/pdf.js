/*
import * as pdfjsLib from 'pdfjs-dist/webpack';
import React, { useState, useEffect } from 'react';

async function loadPdf(url) {
  const loadingTask = pdfjsLib.getDocument(url);
  const pdf = await loadingTask.promise;

  const mainBody = document.getElementById('main-body');
  mainBody.innerHTML = '';

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    await page.render(renderContext).promise;
    mainBody.appendChild(canvas);
  }
}

function TextBox() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        style={{
          width: '300px',
          height: '30px',
          padding: '5px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export { loadPdf, TextBox };
*/
