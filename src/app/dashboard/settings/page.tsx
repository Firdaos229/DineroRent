"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { defaultSettings } from "@/data/site-settings-data";
import { ISiteSettings } from "@/types/site-settings-d-t";

export default function SiteSettingsPage() {
  const [settings, setSettings] = useState<ISiteSettings>(defaultSettings);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = e.target;

    // Special case: file input for logo
    if (id === "logoUrl" && files && files[0]) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file); // Temporary URL for preview

      setSettings((prev) => ({
        ...prev,
        logoUrl: fileUrl,
      }));

      return;
    }

    // Social media links
    if (id.startsWith("social_")) {
      const key = id.replace(
        "social_",
        ""
      ) as keyof ISiteSettings["socialLinks"];
      setSettings((prev) => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [key]: value },
      }));
    } else {
      setSettings((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSave = () => {
    // TODO: send `settings` to your API or store
    console.log("Saved settings:", settings);
    alert("Settings saved (check console)");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">General Site Settings</h2>

      <div className="grid gap-4">
        <Label htmlFor="logoUrl">Logo (image)</Label>
        <Input
          id="logoUrl"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />

        {/* Optional: Thumbnail preview */}
        {settings.logoUrl && (
          <img
            src={settings.logoUrl}
            alt="Logo thumbnail preview"
            className="mt-2 max-h-32 object-cover rounded"
          />
        )}

        <Label htmlFor="email">Contact Email</Label>
        <Input id="email" value={settings.email} onChange={handleChange} />

        <Label htmlFor="phone">Contact Phone</Label>
        <Input id="phone" value={settings.phone} onChange={handleChange} />
      </div>

      <div className="grid gap-4 pt-4">
        <h3 className="text-lg font-semibold">Social Media Links</h3>

        <Label htmlFor="social_facebook">Facebook</Label>
        <Input
          id="social_facebook"
          value={settings.socialLinks.facebook || ""}
          onChange={handleChange}
        />

        <Label htmlFor="social_instagram">Instagram</Label>
        <Input
          id="social_instagram"
          value={settings.socialLinks.instagram || ""}
          onChange={handleChange}
        />

        <Label htmlFor="social_youtube">YouTube</Label>
        <Input
          id="social_youtube"
          value={settings.socialLinks.youtube || ""}
          onChange={handleChange}
        />

        <Label htmlFor="social_twitter">Twitter</Label>
        <Input
          id="social_twitter"
          value={settings.socialLinks.twitter || ""}
          onChange={handleChange}
        />
      </div>

      <Button onClick={handleSave} className="mt-10">
        Save Settings
      </Button>
    </div>
  );
}
