"use strict";

const GCloudStorageDownloader = require('fastboot-gcloud-storage-downloader');
const FastBootAppServer       = require('fastboot-app-server');

const GCS_BUCKET = process.env.FASTBOOT_GCS_BUCKET;
const GCS_KEY    = process.env.FASTBOOT_GCS_KEY;

let downloader = new GCloudStorageDownloader({
  bucket: GCS_BUCKET,
  key: GCS_KEY
});

let server = new FastBootAppServer({
  downloader: downloader
});

server.start();
