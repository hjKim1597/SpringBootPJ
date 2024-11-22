var path = require('path');
const webpack = require('webpack');

//해당 파일을 설정한후
//프로젝트 루트폴더에서 npm install process로 플러그인 설치해 주세요.
module.exports = {
    context: path.resolve(__dirname, 'src/main/react'),
    entry: {
        main: './Main.js', //여러페이지 설정이 가능함
        user: './User.js',
        mypage: './Mypage.js',
        //.....
    },
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        //filename: './src/main/webapp/js/react/[name].bundle.js'
        filename: './src/main/resources/static/bundle/[name].bundle.js'
    },
    mode: 'none',
    module: {
        rules: [ {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env', '@babel/preset-react' ]
                }
            }
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        } ]
    },

    plugins: [
        // fix "process is not defined" error:
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ],
};