import {$} from '../core/dom';

export function Loader() {
    return $.create('div', 'loader').html(`
        <div class="loadingio-spinner-blocks-xdthnuhqrd">
        <div class="ldio-am621g8l7gl">
            <div style='left:38px;top:38px;animation-delay:0s'></div>
            <div style='left:80px;top:38px;animation-delay:0.125s'></div>
            <div style='left:122px;top:38px;animation-delay:0.25s'></div>
            <div style='left:38px;top:80px;animation-delay:0.875s'></div>
            <div style='left:122px;top:80px;animation-delay:0.375s'></div>
            <div style='left:38px;top:122px;animation-delay:0.75s'></div>
            <div style='left:80px;top:122px;animation-delay:0.625s'></div>
            <div style='left:122px;top:122px;animation-delay:0.5s'></div>
        </div></div>
`)
}
