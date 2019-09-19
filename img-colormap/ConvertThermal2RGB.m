% Specify the folder where the files live.
myFolder = 'D:\Thermal\601_w_50th\103MEDIA';
myFolderToSave = 'D:\Thermal\601_w_50th\103MEDIA\Processed';

%myFolder = 'C:\Users\sunni\Downloads\exiftool-11.14\600RiverBluffs';
%myFolderToSave = 'C:\Users\sunni\Downloads\exiftool-11.14\600RiverBluffs\Processed';

% Check to make sure that folder actually exists.  Warn user if it doesn't.
if ~isdir(myFolder)
  errorMessage = sprintf('Error: The following folder does not exist:\n%s', myFolder);
  uiwait(warndlg(errorMessage));
  return;
end
% Get a list of all files in the folder with the desired file name pattern.
filePattern = fullfile(myFolder, '*.jpg'); % Change to whatever pattern you need.
theFiles = dir(filePattern);

%color map
myColorMap = jet(256);
    
for k = 1 : length(theFiles)
    baseFileName = theFiles(k).name;
    fullFileName = fullfile(myFolder, baseFileName);
    fprintf(1, 'Now reading %s\n', fullFileName);
  
    %read image
    thermalImage = rgb2gray(imread(baseFileName));
    %covert to color figure
    rgbImage = ind2rgb(thermalImage, myColorMap);
    %show image
    newFileName = ['hsv_',baseFileName];
    %figure('Name', newFileName); imshow(rgbImage, 'InitialMagnification', 300)
    %save image
    newfullFileName = fullfile(myFolderToSave, newFileName);
    imwrite(rgbImage,newfullFileName)
end

