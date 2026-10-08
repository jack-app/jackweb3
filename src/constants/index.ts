export const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc1-E-aEEFeRlxggQLTea6SY96W-1fNVUN5MxVYKWfmId1yUg/viewform";
export const JOIN_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdEsHCLaclQtPJf7it7b-N6OJIV9nXOwgEJA6Pl_hp6nYOeiA/viewform?usp=header";

// ISR(Incremental Static Regeneration)の再生成間隔(秒)。
// ビルド時に全ページを生成するのではなく、リクエスト時に生成してこの間隔でキャッシュを更新することで、
// ビルドごとのNotion APIの呼び出し回数を大幅に削減する。
// 1時間 = Notionの画像URLの有効期限ともおおよそ揃えている。
export const ISR_REVALIDATE_SECONDS = 3600;
