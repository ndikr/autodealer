import { ContentPage } from "@/components/pages/ContentPage/ContentPage";

export const metadata = {
  title: "Garansi",
};

export default function Page() {
  return (
    <ContentPage
      title="Garansi"
      subtitle="Untuk memenuhi harapan Konsumen, kami menawarkan pilihan pembelian garansi tambahan dengan jangka waktu antara 1 hingga 24 bulan."
      content={
        <>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit dd laborum nisi voluptates atque vero
            consectetur cum a excepturi officiis nam incidunt quae
            iusto, pariatur cupiditate harum molestiae odio.
          </p>
          <p>
            Dolor quas saepe expedita ea fugiat, optio omnis facilis fugit alias
            ratione laboriosam earum porro consectetur ipsam. Mollitia, eaque.
          </p>
          <h2>Deserunt nulla in ea placeat.</h2>
          <p>
            Pellentesque lorem libero, ultricies nec orci sed, ultrices laoreet
            orci. Phasellus enim odio, euismod eu cursus sit amet, porta sed
            metus. Maecenas sit amet tempus elit, vitae pulvinar nisl. Nunc
            accumsan elementum suscipit. Vivamus urna libero, rhoncus in neque
            congue, feugiat pretium mi. Vivamus sit amet massa elit. Mauris
            ultricies dictum ligula at tincidunt. Ut euismod metus mauris,
            elementum scelerisque turpis gravida at. Aenean tincidunt feugiat
            justo ac egestas.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Assumenda, tempora? Molestias officiis rem dolor incidunt
              doloremque atque molestiae,
            </li>
            <li>
              asperiores delectus labore nostrum repellat excepturi veritatis
              necessitatibus voluptates magni consectetur hic?
            </li>
          </ul>
          <p>
            Ut commodo laoreet dolor, eget vehicula ex euismod eu. Etiam a orci
            vel nibh pharetra sollicitudin vel a nulla. Quisque id blandit quam.
            Donec quis maximus augue. Quisque ut elit commodo, consectetur orci
            ut, rhoncus odio.
          </p>
        </>
      }
    />
  );
}
