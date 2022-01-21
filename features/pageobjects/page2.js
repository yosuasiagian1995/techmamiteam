/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page2 {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open2() {
        return browser.url(`https://mamikos.com/room/kost-kabupaten-simeulue-kost-campur-eksklusif-kos-agen-duo-tenant-1#/`)
    }
}
