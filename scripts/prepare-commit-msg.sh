#!/usr/bin/env bash

COMMIT_MSG_FILE=$1

branch_name=`git rev-parse --abbrev-ref HEAD`
branch_type=`echo ${branch_name} | cut -d '/' -f1`

issue_number=`echo ${branch_name} | cut -d '/' -f2 | cut -d '-' -f1`
first_line=`head -n1 ${COMMIT_MSG_FILE}`

if [ -z "$first_line" ]; then
  sed -i ".bak" "1s/^/[#$issue_number] /" ${COMMIT_MSG_FILE}
 fi