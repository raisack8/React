from django.db import models
import datetime

# Create your models here.


class FesModel(models.Model):
  name = models.TextField()
  year = models.DateField()
  event_data1 = models.DateField()
  event_data2 = models.DateField(null=True)
  event_data3 = models.DateField(null=True)
  event_data4 = models.DateField(null=True)
  event_data5 = models.DateField(null=True)
  event_data6 = models.DateField(null=True)
  place = models.TextField(null=True)
  official_url = models.TextField(null=True)
  twitter_id =  models.TextField(null=True)
  insta_id =  models.TextField(null=True)
  image_url1 =  models.TextField(null=True)
  image_url2 =  models.TextField(null=True)
  image_url3 =  models.TextField(null=True)

class StageModel(models.Model):
  fes_id = models.ForeignKey(FesModel, on_delete=models.CASCADE)
  stage_id = models.IntegerField()
  name = models.TextField()
  place = models.TextField()
  color = models.TextField(default="#C0C0C0")

class CategoryModel(models.Model):
  fes_id = models.ForeignKey(FesModel, on_delete=models.CASCADE)
  name =  models.TextField()
  other1 =  models.TextField(null=True)
  other2 =  models.TextField(null=True)

class SectionModel(models.Model):
  fes_id = models.ForeignKey(FesModel, on_delete=models.CASCADE) # 別途DB?
  appearance_date = models.DateField()
  stage = models.ForeignKey(StageModel, on_delete=models.CASCADE) # 別途DB?
  start_time = models.DateTimeField()
  # プルダウンとかから選択させるよう実装すればずれが生じなくなるか？
  allotted_time = models.IntegerField()
  live_category = models.ForeignKey(CategoryModel, on_delete=models.CASCADE) # 別途DB?
  artist_name = models.TextField()
  apparence_flg = models.BooleanField(null=True)
  change_time_flg = models.BooleanField(null=True)
  other1 = models.TextField(null=True)
  other2 = models.TextField(null=True)
  official_url =  models.TextField(null=True)
  twitter_id =  models.TextField(null=True)
  insta_id =  models.TextField(null=True)
  def __str__(self):
    return self.artist_name

class UserModel(models.Model):
  registration_date = models.DateField(default=datetime.datetime.now)
  username = models.TextField()
  user_id = models.TextField()
  email = models.TextField(null=True)
  user_sns_id1 = models.TextField(null=True)
  user_sns_id2 = models.TextField(null=True)
  user_sns_id3 = models.TextField(null=True)
  password = models.TextField()
  gender = models.TextField(null=True)
  age = models.IntegerField(null=True)
  residence = models.TextField(null=True) # 住まい
  active_level = models.IntegerField(null=True)
  subscribe_level = models.IntegerField(null=True)
  invitation_flg = models.BooleanField(null=True)
  my_tite_list = models.TextField(null=True) # [1,2,5,6]のように配列で格納したい　配列→文字列変換
  follow_list = models.TextField(null=True) # [1,2,5,6]のように配列で格納したい　配列→文字列変換
  follower_list = models.TextField(null=True) # [1,2,5,6]のように配列で格納したい　配列→文字列変換