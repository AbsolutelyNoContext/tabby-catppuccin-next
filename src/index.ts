import { NgModule, Injectable } from '@angular/core'
import { Theme } from 'tabby-core'

@Injectable()
class HypeTheme extends Theme {
    name = 'Catppuccin Mocha'
    css = require('./mocha.scss')
    terminalBackground = '#11111b'
}

@NgModule({
    providers: [
        { provide: Theme, useClass: HypeTheme, multi: true },
    ],
})
export default class HypeThemeModule { }
