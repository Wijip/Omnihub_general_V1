# OmniHub General Progress Log

- **[VIDEODETAIL_LAYOUT_FIX STAGE 1.1]**: Standardized the `VideoDetail.tsx` layout by removing `lg:hidden` logic for portrait videos, eliminating duplicated sections for video info and comments, and enforcing a consistent 12-column grid layout across all video types. Also corrected the Download dropdown menu to display accurate resolutions and file sizes dynamically based on `resolutionsWithSizes` state.
-e 
- **[SERVER_DB_AND_STUDIO_POLLING_FIX STAGE 1.2]**: Replaced invalid db.promise().query calls with standard db.query in server.ts for FFmpeg completion, encoding status, search suggestions, and search endpoints.
-e 
- **[UNIFY_UPLOAD_PAGE_WITH_CONTEXT STAGE 1.7]**: Removed redundant background chunk upload logic from `Upload.tsx` and successfully delegated all queueing and encoding state tracking directly to `UploadContext.tsx` via the `addTask` function.
-e 
- **[DEV_SERVER_BOOT_HOTFIX]**: Fixed `EADDRINUSE` crash and infinite DB connection lock by hardcoding the AI Studio required Port 3000, disabling the interactive CLI dashboard (`blessed`) which hijacked standard output, and re-ordering the boot sequence to unblock the Express listener.
-e 
- **[MONOTONIC_CHUNK_PROGRESS_FIX STAGE 1.8]**: Repaired chunk upload logic in `UploadContext.tsx`. Added `chunkLoadedBytes` array to accurately accumulate byte sizes across parallel workers, and enforced strictly monotonic progress updates via `Math.max(prev.progress, newProgress)` to prevent backward progress ticking.
-e 
- **[INFORMATIVE_ENCODING_QUEUE_UI STAGE 1.9]**: Enhanced Active Tasks UI in `Studio.tsx` to clearly differentiate `waiting` (Queued for Encoding) and `processing` (Actively Encoding via GPU) states. Integrated animated amber pulse badges and descriptive subtexts to clarify system constraints to users.
