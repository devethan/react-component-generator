export default (targetPath: string): string => `{
  "path": {
    "components": "${targetPath}"
  }
}  
`;
