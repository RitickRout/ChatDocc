import AWS from 'aws-sdk';

async function uploadInBucket({ file,List }) {
  const S3_BUCKET = "chatdoc-files";
  const REGION = "region";

  AWS.config.update({
    accessKeyId: "AKIA2GCBIVZW6FVS4SYG",
    secretAccessKey: "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",
  });
  

  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const params = {
    Bucket: S3_BUCKET,
    Key: file.name,
    Body: file,
  };
  s3.listObjectsV2({
    Bucket: 'chatdoc-files',
  }, (err, data) => {
    if (err) {
      console.error("Error listing objects:", err);
    } else {
      console.log("List of objects:", data.Contents);
      // data.Contents contains an array of objects with information about each object in the bucket
    }
  });

  try {
    const data = await s3.putObject(params).promise();
    console.log(data, "Uploaded Data!"); // Additional logging for successful upload
    alert("File uploaded successfully.");
    return data;
  } catch (error) {
    console.error("Error uploading file:", error); // Log the specific error
    alert("Error uploading file. Please try again.");
    throw error; // Re-throw the error to handle it in the calling function if needed
  }
}

export default uploadInBucket