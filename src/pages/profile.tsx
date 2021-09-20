import { Box, Link, makeStyles, Typography } from '@material-ui/core'
import * as React from 'react'
import masaru514 from '../images/masaru514.png'

const useStyles = makeStyles({
  root: {
    fontFamily: 'Inter, Hiragino Kaku Gothic ProN, Meiryo',
    maxWidth: 800,
    margin: '0 auto',
    padding: '1rem'
  },
  title: {
    fontSize: 32,
    letterSpacing: '1px',
    fontFamily: 'Inter, Hiragino Kaku Gothic ProN, Meiryo',
    color: '#666',
  },
  titleH2: {
    fontSize: 24,
    color: '#666',
    margin: '4rem 0 0'
  },
  text: {
    letterSpacing: '1px',
    lineHeight: '1.8rem',
    color: '#666',
    margin: '2rem 0 1rem'
  },
})

const Profile = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.title}>masaru514</Typography>
      <Box mt={4}>
        <img src={masaru514} alt="masaru514" width="200" />
      </Box>
      <Typography className={classes.text}>東京のWeb開発会社に勤務しているフロントエンドエンジニアです。</Typography>
      <Typography className={classes.text}>1997年爆誕。</Typography>
      <Typography variant="body1" className={classes.text}>
        ECサイト、自社Webアプリケーション開発に携わっています。エンジニアキャリアは３年目でシニアエンジニアクラスになれるよう日々勉強しています。
        コードを書いたり、開発中に感じた疑問を体形的に理解するのが好きです。書いているコードは全てPublicリポジトリで<Link target="_blank" href="https://github.com/masaru514">Github</Link>上に公開しておりますので、ご興味ありましたら閲覧ください。
      </Typography>
      <Typography className={classes.text}>趣味で将棋を指しています。</Typography>
      <Typography variant="h2" className={classes.titleH2}>ポートフォリオ</Typography>
      <Typography className={classes.text}>準備中</Typography>
    </Box>
  )
}

export default Profile