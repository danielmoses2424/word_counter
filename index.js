window.addEventListener('DOMContentLoaded', ()=>{

    const tex_area = document.getElementById('input-text');
    const count = document.getElementById('word-count');
    const ch_count = document.getElementById('character-count');
    const unique =  document.getElementById('unique-words');

    tex_area.addEventListener('input', ()=>{
        const text = tex_area.value.trim();
        const words = text === '' ? 0 : text.split(/\s+/).length;
        const character = text.length;
        const uniqueWords = new Set(text.match(/\b\w+\b/g)).size;

        tex_area,innerHeight = `Enter your text here: ${text}`;
        count.innerHTML = `word cont: ${words}`
        ch_count.innerHTML = `character count: ${character}`;
        unique.innerHTML = `unique words: ${uniqueWords}`;
    });

});