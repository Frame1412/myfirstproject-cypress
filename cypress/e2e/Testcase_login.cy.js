describe('Shopee login Process', () => {
    beforeEach(() => {
        cy.visit('https://shopee.co.th/');
        cy.get(':nth-child(1) > .shopee-button-outline').click();
    });
    it('login success', () => {
    // ดึงค่ารหัสผ่านที่ถูกเข้ารหัส Base64 จาก environment variable
    const encodedPassword = Cypress.env('PASSWORD');

    // ถอดรหัส Base64 กลับเป็นรหัสผ่านที่แท้จริง
    const decodedPassword = Buffer.from(encodedPassword, 'base64').toString('utf8');

    // ดึงค่า username จาก environment variable
    const username = Cypress.env('USERNAME');

    // ใช้ locators จากไฟล์ locators.js และกรอกข้อมูล login
    cy.get(locator.loginpage.username).type(username);
    cy.get(locator.loginpage.password).type(decodedPassword);

    // ดำเนินการคลิกปุ่ม login
    cy.get(locator.loginpage.loginButton).click();
    });
});