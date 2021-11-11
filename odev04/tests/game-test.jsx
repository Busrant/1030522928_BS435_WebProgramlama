const React = require('react');
const { mount } = require('enzyme');
const {Game} = require('../src/game');

test('Number of card',()=>{
    const driver =mount(<Game/>);
    const cards = driver.find('.card');
    expect(cards.length).toBe(3);
})

test('Single card selection',()=>{
    const driver = mount(<Game/>);
    let card = driver.find('.card').at(0);
    card.simulate('click');
    card = driver.find('.card').at(0);
    let srcName = card.find("image").prop("src")
    expect(srcName === 'image/astronaut.jfif' || srcName === 'image/moon.jfif').toBeTruthy();
})

test('Two card selection and restart',()=>{
    const driver = mount(<Game/>);

    for(let i = 0; i<20;i++){
    let card = driver.find('.card').at(0);
    card.simulate('click');

    card = driver.find('.card').at(0);
    let secondSelected = Math.floor(Math.random()*2)
    let srcName = card.find("image").prop("src");
    if(srcName==='image/moon.jfif'){
        card = driver.find('.card').at(secondSelected+1);
        card.simulate('click');

        card = driver.find('.card').at(secondSelected+1);
        srcName = card.find("image").prop("src")
        expect(srcName === 'image/astronaut.jfif' || srcName === 'image/moon.jfif').toBeTruthy();
    }
    let restart = driver.find('.link');
    restart.simulate('click');
    }

})