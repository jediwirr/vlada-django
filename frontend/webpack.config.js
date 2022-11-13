const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './static/frontend'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],    
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  'targets': 'defaults',
                }],
                '@babel/preset-react',
              ],
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
