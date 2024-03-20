// // pages/[id].js
// import { details } from '../data';
// import Info from '../components/Info';

// export async function getStaticPaths() {
//   const paths = details.map(detail => ({
//     params: { id: detail.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const detail = details.find(detail => detail.id.toString() === params.id);
//   return { props: { detail } };
// }

// const DetailPage = ({ detail }) => {
//   return <Info detail={detail} />;
// };

// export default DetailPage;

// pages/[id].js

import DoctorCard from '@/components/DriverCard';
import { details } from '../data';
export async function getStaticPaths() {
  const paths = details.map((driver) => ({
    params: { id: details.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getDetail({ params }) {
  const driver = details.find((driver) => driver.id.toString() === params.id);
  return { props: { driver } };
}

const DriverDetailsPage = ({ driver }) => {
  return <DoctorCard driver={driver} />;
};

export default DriverDetailsPage;
