context('LuckyDraw', () => {
  it('run successfully when normal path', () => {
    cy.visit('/');
    cy.get('a.creat_new_activity').click()
    cy.get('div.activity-setting input').type("XX公司2019年年会")
    cy.contains('NEXT').click()
    cy.contains('加载示例数据').click()
    cy.contains('NEXT').click()
    cy.contains('NEXT').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('next').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('next').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('next').click()

    cy.contains('抽奖结果').click()
  })
});
