const cheerio = require('cheerio');
const puppet = require('puppeteer');

module.exports = {
  async searchChannels(req, res) {
    try {
      const { search_term } = req.query;
      const browser = await puppet.launch();
      const page = await browser.newPage();
      await page.goto(`https://www.youtube.com/results?app=desktop&search_query=${encodeURI(search_term)}&sp=EgIQAg%253D%253D`);

      const html = await page.content();

      browser.close();

      const $ = cheerio.load(html);

      const results = [];
      $('#contents ytd-channel-renderer').each((i, e) => {
        results.push({
          name: $(e).find('#info-section ytd-channel-name yt-formatted-string').text(),
          image_src: 'https:' + $(e).find('#avatar-section #avatar #img').attr('src'),
          verified: ($(e).find('ytd-badge-supported-renderer .badge-style-type-verified').length) ? true : false,
          subscribers: $(e).find('#info-section #metadata #subscribers').text(),
          videos: $(e).find('#info-section #metadata #video-count').text(),
          description: $(e).find('#info-section #description').text(),
        })
        if (i >= 5) {
          return false;
        }
      });

      return res.status(200).json(results);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ erro: 'Erro' });
    }
  }
}
