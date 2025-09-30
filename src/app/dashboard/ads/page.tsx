"use client";

import { useState } from "react";
import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { ReusableSheet } from "@/components/ui/reusable-sheet";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { IHeroBanner, IOfferAd } from "@/types/ads-d-t";
import { adsColumns } from "@/features/columns/ads.columns";
import { AdsForm } from "./AdsForm";
import { offerAds } from "@/data/ads-data";

export default function AdsPage() {
  const [heroBanner, setHeroBanner] = useState<IHeroBanner>({
    videoUrl: "/assets/video/sea-video.mp4",
    title: "Welcome to DineroRent",
    subtitle: "Find Shortlets, Apartments, Cars & Boats",
  });

  const [offer, setOfferAds] = useState<IOfferAd[]>(offerAds);

  const [editAd, setEditAd] = useState<IOfferAd | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [showHeroForm, setShowHeroForm] = useState(false);

  const { handleDelete } = useDeleteHandler<IOfferAd>(offerAds);

  const handleSaveOffer = (ad: IOfferAd) => {
    if (editAd) {
      setOfferAds((prev) =>
        prev.map((item) => (item.id === ad.id ? ad : item))
      );
      setEditAd(null);
    } else {
      setOfferAds((prev) => [...prev, { ...ad, id: Date.now() }]);
    }
    setIsSheetOpen(false);
  };

  const handleSaveHero = (data: IHeroBanner) => {
    setHeroBanner(data);
    setShowHeroForm(false);
  };

  return (
    <>
      <div className="mb-6 p-4 border rounded bg-muted">
        <h2 className="text-lg font-bold mb-2">Hero Banner</h2>
        <p className="mb-2">{heroBanner.title}</p>
        <button
          onClick={() => setShowHeroForm(true)}
          className="text-sm underline text-blue-600"
        >
          Edit Hero Banner
        </button>
      </div>

      <ReusableDataTable
        data={offer}
        columns={adsColumns}
        addLabel="Add Offer Ad"
        onAdd={() => setIsSheetOpen(true)}
        onEdit={(row) => {
          setEditAd(row);
          setIsSheetOpen(true);
        }}
        onDelete={handleDelete}
      />

      {/* Hero Banner Modal */}
      <ReusableSheet
        open={showHeroForm}
        onOpenChange={(open) => setShowHeroForm(open)}
        title="Edit Hero Banner"
        description="Update homepage video, title and subtitle"
      >
        <AdsForm
          type="hero"
          defaultValue={heroBanner}
          onSave={handleSaveHero}
        />
      </ReusableSheet>

      {/* Offer Ad Form Modal */}
      <ReusableSheet
        open={isSheetOpen}
        onOpenChange={(open) => {
          setIsSheetOpen(open);
          if (!open) setEditAd(null);
        }}
        title={editAd ? "Edit Offer" : "Add Offer"}
        description="Manage promotional offers"
      >
        <AdsForm
          type="offer"
          defaultValue={editAd || undefined}
          onSave={handleSaveOffer}
        />
      </ReusableSheet>
    </>
  );
}
