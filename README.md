# 八字排盘小工具（GitHub Pages 部署包）

这个仓库用于将你的单文件八字工具部署为 GitHub Pages 网页。

## 使用方法（超简版）

1. 在 GitHub 新建一个公开仓库（Public）。
2. 把本包里的 `index.html` 上传到仓库根目录（root）。
3. 打开仓库：
   - Settings → Pages
   - Source 选择 **Deploy from a branch**
   - Branch 选 **main**
   - Folder 选 **/(root)**
   - Save
4. 等 GitHub 给出站点地址。
5. 用 iPhone 的 Safari 打开该地址 → 分享 → **添加到主屏幕**。

这样从主屏幕打开就会更像 App。

## 更新

以后只要用新版本工具文件覆盖仓库里的 `index.html` 即可。

## 说明

- 这是纯前端单文件工具，不需要数据库。
- 如遇 Safari 缓存导致的“看起来没更新”，可尝试：
  - 私密模式打开
  - 或在网址后加 `?v=1` 之类的参数强制刷新。