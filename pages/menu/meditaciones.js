import YoutubeVideo from '@/components/YoutubeVideo';
import MainLayout from '@/components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
    <div className="container mx-auto py-4 bg-gradient-to-br from-gen-rosita via-gen-menta to-gen-rosaPastel ">
        <h1 className="text-4xl font-bold text-center">Meditaciones</h1>
      <YoutubeVideo  videoId="WjO_098iXOw" />
        <YoutubeVideo videoId="WKbF68x_Dm8" />
        <YoutubeVideo videoId="FTqrQsSIKR0" />
        <YoutubeVideo videoId="g6GkJi_0ogM" />
    </div>
    </MainLayout>
  );
}
