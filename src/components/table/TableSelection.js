export class TableSelection {
    static className = 'selected'

    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.clear()
        $el.focus().addClass(TableSelection.className)
        this.group.push($el)
        this.current = $el
    }

    get selectedIds() {
        return this.group.map($el => $el.id())
    }

    selectGroup($cells = []) {
        this.clear()

        this.group = $cells
        this.group.forEach(($cell) => {
            $cell.addClass(TableSelection.className)
        })
    }

    applyStyle(style) {
        this.group.forEach($el => $el.css(style))
    }

    clear() {
        this.group.forEach($c => $c.removeClass(TableSelection.className))
        this.group = []
    }
}
