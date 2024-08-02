"use client";
import list from "../data/list.json";
import BannerImageComp from "../components/BannerImageComp";
import EditBannerTemplateBs from "../components/EditBannerTemplateBs";
import { useState } from "react";
import { AdBanner } from "@/types/AdBanner";

export default function Home() {
  const [banners, setBanners] = useState<AdBanner[]>(list);
  const [editBanner, setEditBanner] = useState<AdBanner | null>(null);

  const handleEdit = (id: number) => {
    const banner = banners.find((banner) => banner.id === id);
    if (banner) {
      setEditBanner(banner);
    }
  };

  const handleSave = async (banner: AdBanner) => {
    const updatedBanners = banners.map((b) =>
      b.id === banner.id ? banner : b
    );
    setBanners(updatedBanners);
    setEditBanner(null);
  }

  const handleClose = () => {
    setEditBanner(null);
  }

  return (
    <>
      {editBanner && (
        <EditBannerTemplateBs banner={editBanner} handleSave={handleSave} handleClose={handleClose} />
      )}
      <main className="min-h-screen bg-[#161618] p-24 flex flex-wrap gap-12 w-full justify-center">
        {banners.length > 0 ? (
          banners.map((banner) => (
            <BannerImageComp key={banner.id} banner={banner} handleEdit={handleEdit} />
          ))
        ) : (
          <p className="text-white">No Banners Found</p>
        )}
      </main>
    </>
  );
}
