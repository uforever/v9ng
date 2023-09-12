console.log('---- DEBUG ----');

debugger;

const scriptTags = document.scripts;
for (let i = 0; i < scriptTags.length; i++) {
    const scriptTag = scriptTags[i];
    if (scriptTag.getAttribute('r') === 'm') {
        if (/\.[a-f0-9]{7}\.js$/.test(scriptTag.src)) {
            eval.apply(window, [v9ng.cache.externalJs]);
        } else {
            const scriptCode = scriptTag.textContent;
            // eval.apply(window, [scriptCode]);
            if (scriptCode.length > 8) {
                try {
                    eval.apply(window, [scriptCode]);
                } catch (e) { };
            }
        }
    }
}

debugger;