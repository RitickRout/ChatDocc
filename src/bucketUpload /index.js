import AWS from "aws-sdk";
import { useEffect, useState } from "react";

function Upload({file}) {
  // Create state to store file

useEffect(()=>{
  uploadFile(file)
},[file])


  // Function to upload file to s3
  const uploadFile = async (file) => {
    // S3 Bucket Name
    const S3_BUCKET = "//chatdoc-files/";

    // S3 Region
    const REGION = "region";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: "AKIA2GCBIVZW6FVS4SYG",
      secretAccessKey: "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",
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    // Uploading file to s3

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      console.log(data, "Uploaded  Data!")
      // Fille successfully uploaded
      alert("File uploaded successfully.");
    });
  };
}

export default Upload;