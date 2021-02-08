import { calculatorBiorhythms } from './Calculation';

it('calculates the physical biorhythms', () => {
    const {Physical} = calculatorBiorhythms('1995-01-01', '2020-02-18', 23);
    expect(Physical).toBeCloseTo(0.5196);
   
});

it('calculate the emotional biorhythms ', () => {
    const {Emotional} = calculatorBiorhythms('1995-01-01', '2020-02-18', 28);
    expect(Emotional).toBeCloseTo(-0.9010);
});

it('calculates the physical biorhythms', () => {
    const { Intellectual } = calculatorBiorhythms('1995-01-01', '2020-02-18', 23);
    expect(Intellectual).toBeCloseTo(0.8146);

});