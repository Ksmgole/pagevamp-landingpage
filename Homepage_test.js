
Feature('Homepage');

Scenario('Pagevamp logo', (I) => {
    I.amOnPage('/');
    I.click({css:'a.pv-logo'});
    I.amOnPage('/pricing');
    I.click({css:'a.pv-logo'});
    I.scrollTo('footer');
    I.click({css:'a img.pv-footer-logo'});
});

Scenario('How it works', (I) => {
    I.amOnPage('/');
    I.click({css:'ul.nav a#how-it-works-link'});
    I.click('Watch it in action >');
});

Scenario('Pricing', (I) => {
    I.amOnPage('/');
    I.click('Pricing',{css:'ul.nav'});
    I.click('Get Pagevamp');
});


