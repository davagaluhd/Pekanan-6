const Page = require('./page.js')

class DashboardPage extends Page {
    get dashboardPageElement () {
        return $('//h3[contains(text(),"kasirAja")]')
    }

    get penggunaMenuElement () {
        return $('#root > div > div > div.css-tnxwfz > div > a:nth-child(8) > div')
    }

    get btnTambahPengguna() {
        return $("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a");
    }

    get inputName() {
        return $("#nama");
    }
    
    get inputEmail() {
        return $("#email");
    }
    
    get inputPassword() {
        return $("#password");
    }

    get btnSimpanPengguna() {
        return $("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button");
    }

    get messageElement () {
        return $('[id="chakra-toast-manager-top-right"')
    }

    get errorMessageUser () {
        return $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3')
    }
}

module.exports = new DashboardPage();