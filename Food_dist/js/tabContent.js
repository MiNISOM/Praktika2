async function waitForCustomElements() {
    await Promise.all([
        customElements.whenDefined('for-header'),
        customElements.whenDefined('for-side-panel'),
        customElements.whenDefined('for-preview'),
        customElements.whenDefined('for-offer'),
        customElements.whenDefined('for-calculation'),
        customElements.whenDefined('for-menu'),
        customElements.whenDefined('for-order'),
        customElements.whenDefined('for-promotion'),
        customElements.whenDefined('for-footer')
    ]);
}

waitForCustomElements().then(() => {
    window.onload = () => {
        const shadowRoot = document.querySelector('for-preview').shadowRoot;

        console.log(shadowRoot.querySelector('section'));
    };
});