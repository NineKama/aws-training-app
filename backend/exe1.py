import boto3

def exe1():
    result = {
        'Name' : False,
        'InstanceType': False
    }
    client = boto3.client('ec2')
    response = client.describe_instances()
    for rever in response['Reservations']:
        for i in rever['Instances']:
            if i['InstanceType'] == 't2.micro':
                result['InstanceType'] = True
            for t in i['Tags']:
                if t['Key'] == 'Name' and t['Value'] == 'Test1':
                    result['Name'] = True
    return result