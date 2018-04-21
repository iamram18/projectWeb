from django.db import models

class items(models.Model):
    itemname=models.CharField(max_length=10)
    description=models.CharField(max_length=40)
    item_id=models.IntegerField()

def __str__(self):
    return self.itemname
