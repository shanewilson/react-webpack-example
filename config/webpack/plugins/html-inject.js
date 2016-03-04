import path from 'path';
import fs from 'graceful-fs';

import config from '../..';
import webpackConfig from '../_base';

function HtmlInject() {}
HtmlInject.prototype.apply = compiler => {
  compiler.plugin('done', stats => {
    const assets = stats.toJson().assets.filter(a => a.name.endsWith('.js'));
    assets.reverse();

    const buffer = fs.readFileSync(path.join(config.get('dir_src'), 'index.html'), 'utf8');
    const html = buffer.replace(
        /<!-- build:js -->[\s\S]*<!-- \/build:js -->/,
        assets.map(asset => `<script src="${webpackConfig.output.publicPath}${asset.name}"></script>`).join('')
    );
    fs.writeFileSync(path.join(config.get('dir_dist'), config.get('globals').__BASE__, 'index.html'), html, 'utf8');

    // const favico = fs.readFileSync(path.join(config.get('dir_src'), 'favicon.ico'));
    // fs.writeFileSync(path.join(config.get('dir_dist'), config.get('globals').__BASE__, 'favicon.ico'), favico);
  });
};

export default HtmlInject;
