import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribres = []

        this.prepare()
    }

    // Настраиваем компонент до init
    prepare() {}

    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }

    // Уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Подписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribres.push(unsub)
    }

    // $subscribe(event, fn) {
    //     return this.emitter.subscribe(event, fn)
    // }

    // Инициализируем компонент, добавляем DOM слушатели
    init() {
        this.initDOMListeners()
    }

    // Удаляем компонент, чистим слушатели
    destroy() {
        this.removeDOMListeners()
        this.unsubscribres.forEach(unsub => unsub())
    }
}
