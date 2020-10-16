#!/bin/bash -e

{
   git pull --tags
   git fetch --all
   git fetch -p
} || {
   echo "scripts:git-fetch - Error"
}

if [ -z "$1" ];
then
   echo "scripts:git-fetch Not branch for delete";
else
   {
      git branch -D $1
      echo "scripts:git-fetch The $1 branch was deleted"
   } || {
      echo "scripts:git-fetch The $1 branch have was error to the delete"
   }
fi
