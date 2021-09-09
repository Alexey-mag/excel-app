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

    selectGroup($cells = []) {
        this.clear()

        this.group = $cells
        this.group.forEach(($cell) => {
            $cell.addClass(TableSelection.className)
        })
        // this.group.push($el)
        // $el.addClass(TableSelection.className)
    }

    clear() {
        this.group.forEach($c => $c.removeClass(TableSelection.className))
        this.group = []
    }
}
