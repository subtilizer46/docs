1. **Backup:** Clone your old repository to your computer.
   ```
   git clone [old-repo-url]
   ```

2. **Create New Repo:** On GitHub, make a new empty repository where you want to move.

3. **Change Location:** In your cloned repository (on your computer), change the remote URL to the new one.
   ```
   git remote set-url origin [new-repo-url]
   ```

4. **Upload:** Push the repository to the new location.
   ```
   git push -u origin master
   ```

5. **Done:** Now, your repository is in the new location. 

