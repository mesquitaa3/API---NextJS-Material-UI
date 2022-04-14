import Layout from '../../components/Layout';
import styles from './Coin.module.css';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

const Coin = ({ coin }) => {
  return (
    <Layout>
    
    <Box m={2} pt={0.5}>
    <Button href="/" variant="contained" color="primary" sx={{ height: 40, justifyContent: "flex-start", alignItems: "flex-start", mx: "auto", m: "1", p: "1"}}>Voltar</Button>
    </Box>

      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img
            src={coin.image.large}
            alt={coin.name}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p>
            Dólar:&nbsp; 
              {coin.market_data.current_price.usd} $
          </p>
          <span>
            Euro:&nbsp;
              {coin.market_data.current_price.eur} €
          </span>
        </div>

        

      </div>
    </Layout>
    


  );

};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data
    }
  };
}