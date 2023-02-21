import { test, devices, expect } from '@playwright/test'
import { Cards } from '../../components/Card';
import villagers from '../../data/villagers.json'

test.use({
    browserName: 'chromium',
    viewport: { width: 1200, height: 720 }
})

test.describe('Testing for profile on desktop', () => {
    
test('checking if Admiral displays correct information', async ({ page }) => {

    await page.goto('http://localhost:3000/profile?index=0&name=Admiral&type=All');

    await page.waitForLoadState();

    console.log('Page loaded successfully');

    await page.locator('#profile')

    const profileCardTitle = await page.innerText('#profile .title');
    expect(profileCardTitle).toBe('Admiral');

    const profileCardPersonality = await page.innerText('#profile .personality');
    expect(profileCardPersonality).toBe('Personality: Cranky');

    const profileCardHobby = await page.innerText('#profile .hobby');
    expect(profileCardHobby).toBe('Hobby: Nature');

    const profileCardSpecies = await page.innerText('#profile .species');
    expect(profileCardSpecies).toBe('Species: Bird');

    const profileCardBirthday = await page.innerText('#profile .bday');
    expect(profileCardBirthday).toBe('Bday: 1/27');

    const profileCardCatchphrase = await page.innerText('#profile .catchphrase');
    expect(profileCardCatchphrase).toBe('Catchphrase: "aye aye"');

    const profileCardImage = await page.getAttribute('#profile .profile-image', 'src');
    expect(profileCardImage).toBe('https://acnhcdn.com/latest/NpcBromide/NpcNmlBrd06.png');

    const profileCardSong = await page.innerText('#profile .song');
    expect(profileCardSong).toBe('Favorite Song: Steep Hill');

    const profileCardIcon = await page.getAttribute('#profile .icon', 'src');
    expect(profileCardIcon).toBe('https://acnhcdn.com/latest/NpcIcon/brd06.png');

});

test('Checking the title of the page', async ({ page }) => {
    await page.goto('http://localhost:3000/profile');
    const title = await page.title();
    expect(title).toBe('Profile of Villagers in New Horizon');
})
});
