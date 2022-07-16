const mainDOM = document.querySelector('main');

class KitchenRange {
  constructor(holes) {
    this.holes = holes;
    this.render();
  }

  render() {
    const columns = Math.ceil(Math.sqrt(this.holes));
    const width = 120 * columns + 4;
    const html = `<div class="kitchen-range" style="width: ${width}px">
                    <div class="holes-container">
                      ${'<div class="hole"></div>'.repeat(this.holes)}
                    </div>
                    <div class="switch-container">
                      ${'<div class="switch"></div>'.repeat(this.holes)}
                    </div>
                  </div>`;

    mainDOM.innerHTML += html;
    this.enableClicks();
  }

  enableClicks() {
    const currentSwitches = Array.from(document.querySelectorAll('.switch'));
    const currentHoles = Array.from(document.querySelectorAll('.hole'));

    currentSwitches.forEach((switchEl) => {
      switchEl.addEventListener('click', () => {
        const activeSwitch = currentSwitches.indexOf(switchEl);
        currentHoles[activeSwitch].classList.toggle('hot');
        switchEl.classList.toggle('on');
      });
    });
  }

  resetHandler() {
    mainDOM.innerHTML = '';
  }
}

export { KitchenRange };
